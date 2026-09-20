import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Recipes from "./Recipes";
import { fetchRecipes } from "../../Util/http";

jest.mock("../../Util/http");

const renderRecipes = () => {
  const queryClient = new QueryClient();
  return render(
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <Recipes />
      </QueryClientProvider>
    </MemoryRouter>
  );
};

const mockRecipes = [
  {
    id: "1",
    title: "Chicken-Salad",
    slug: "chicken-salad",
    prepMinutes: 10,
    cookMinutes: 15,
    ingredients: ["chicken", "lettuce"],
    image: "test.jpg",
  },
  {
    id: "2",
    title: "Beef-Stew",
    slug: "beef-stew",
    prepMinutes: 15,
    cookMinutes: 25,
    ingredients: ["beef", "carrot"],
    image: "test.jpg",
  },
];

describe("Recipes filters work correctly", () => {
    test("filters recipes based on search input", async () => {
      (fetchRecipes as jest.Mock).mockResolvedValue(mockRecipes);
      renderRecipes();

      // wait for recipes to appear
      expect(await screen.findByText("Chicken-Salad")).toBeInTheDocument();
      expect(screen.getByText("Beef-Stew")).toBeInTheDocument();

      // find search input
      const input = screen.getByPlaceholderText(/search/i);

      // simulate typing
      await userEvent.type(input, "chicken");

      // Wait for debounce and UI update
      await screen.findByText("Chicken-Salad");
      // Beef-Stew should disappear
      await waitFor(() => {
        expect(screen.queryByText("Beef-Stew")).not.toBeInTheDocument();
      });
    });

    test("filters recipes by prep time", async () => {
      (fetchRecipes as jest.Mock).mockResolvedValue(mockRecipes);

        renderRecipes();

          // wait for initial data
            expect(await screen.findByText("Chicken-Salad")).toBeInTheDocument();
            expect(screen.getByText("Beef-Stew")).toBeInTheDocument();

          // 🟢 Step 1: Open PREP dropdown
            const prepDropdown = screen.getByRole("button", {
              name: /Max Prep Time/i,
            });

          await userEvent.click(prepDropdown);

          // 🟢 Step 2: Select 10 mins
          const option = screen.getByLabelText(/10 mins/i);
          await userEvent.click(option);

          // 🟢 Step 3: Assert filtered result

        // Chicken Salad (prepTime: 10) → should stay
          expect(screen.getByText("Chicken-Salad")).toBeInTheDocument();

        // Beef Stew (prepTime: 15) → should disappear
         expect(screen.queryByText("Beef-Stew")).not.toBeInTheDocument();
    });

    test("filters recipes by cook time", async () => {
      (fetchRecipes as jest.Mock).mockResolvedValue(mockRecipes);

        renderRecipes();

          // wait for initial data
           expect(await screen.findByText("Chicken-Salad")).toBeInTheDocument();
           expect(screen.getByText("Beef-Stew")).toBeInTheDocument();

          // 🟢 Step 1: Open COOK dropdown
            const cookDropdown = screen.getByRole("button", {
            name: /Max Cook Time/i,
            });

          await userEvent.click(cookDropdown);

          // 🟢 Step 2: Select 20 mins
            const option = screen.getByLabelText(/20 mins/i);
            await userEvent.click(option);

          // 🟢 Step 3: Assert results

          // Chicken Salad (cookTime: 15) → should stay
            expect(screen.getByText("Chicken-Salad")).toBeInTheDocument();

          // Beef Stew (cookTime: 25) → should disappear
            expect(screen.queryByText("Beef-Stew")).not.toBeInTheDocument();
    });

    test("shows 'no recipes found' when no recipe matches search", async () => {
      (fetchRecipes as jest.Mock).mockResolvedValue(mockRecipes);
      renderRecipes();

      // wait for initial data
      expect(await screen.findByText("Chicken-Salad")).toBeInTheDocument();

      const input = screen.getByPlaceholderText(/search/i);

      await userEvent.clear(input);
      await userEvent.type(input, "xyz123");

      // Wait for debounce and UI update
      await screen.findByText(/No recipes found/i);
      // Ensure recipes are gone
      await waitFor(() => {
        expect(screen.queryByText("Chicken-Salad")).not.toBeInTheDocument();
        expect(screen.queryByText("Beef-Stew")).not.toBeInTheDocument();
      });
    });
});

