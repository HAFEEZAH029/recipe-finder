import chevron from '../assets/Images/Scale/icon-chevron-down.svg';
import { useState, useRef, useEffect } from "react";
import { AnimatePresence,motion } from 'motion/react';

type Props = {
  options: number[];
  value: number | null;
  setValue: (value: number | null) => void;
  label: string;
  name: string;
  formatLabel?: (value: number) => string;
};

const Dropdown = ({
  options,
  value,
  setValue,
  label,
  name,
  formatLabel,
}: Props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* BUTTON */}
      <button
        onClick={() => setOpen(prev => !prev)}
        className="flex items-center justify-between gap-2 rounded-lg border bg-white px-4 py-2 text-sm w-full sm:w-auto"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`dropdown-listbox-${name}`}
        aria-label={label}
        id={`dropdown-label-${name}`}
      >
        {value !== null
          ? formatLabel
            ? formatLabel(value)
            : `${value} mins`
          : label}

        <img
          src={chevron}
          alt=""
          aria-hidden="true"
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* DROPDOWN */}
      <AnimatePresence>
        {open && (
        <motion.div
          className="absolute z-10 mt-2 w-48 text-left rounded-xl border bg-white p-3 shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          role="listbox"
          id={`dropdown-listbox-${name}`}
          aria-labelledby={`dropdown-label-${name}`}
        >
          {options.map((time) => (
            <label key={time} className="flex items-center gap-2 py-1 text-sm" role="option" aria-selected={value === time} tabIndex={0}>
              <input
                type="radio"
                name={name}
                checked={value === time}
                onChange={() => {
                  setValue(time);
                  setOpen(false);
                }}
                aria-label={formatLabel ? formatLabel(time) : `${time} mins`}
              />
              {time} mins
            </label>
          ))}

          <button
            onClick={() => {
              setValue(null);
              setOpen(false);
            }}
            className="mt-2 text-[14px] text-red-500 hover:underline"
            aria-label={`Clear ${label} filter`}
          >
            Clear
          </button>
        </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
