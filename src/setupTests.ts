import '@testing-library/jest-dom'; //imported so that I do not have to import it inevery single file
import "@testing-library/jest-dom";

// ✅ FIX for TextEncoder error
import { TextEncoder, TextDecoder } from "util";

global.TextEncoder = TextEncoder as typeof global.TextEncoder;
global.TextDecoder = TextDecoder as typeof global.TextDecoder;;