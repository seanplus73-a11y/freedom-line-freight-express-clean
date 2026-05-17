import { useState } from "react";
import { Link } from "react-router";

interface SmsConsentCheckboxProps {
  required?: boolean;
  onChange?: (checked: boolean) => void;
}

export function SmsConsentCheckbox({
  required = true,
  onChange,
}: SmsConsentCheckboxProps) {
  const [checked, setChecked] = useState(false);
  const [touched, setTouched] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    setTouched(true);
    onChange?.(e.target.checked);
  };

  const showError = required && touched && !checked;

  return (
    <div className="space-y-2">
      <label className="flex items-start gap-3 cursor-pointer group">
        {/* Checkbox */}
        <div className="relative flex-shrink-0 mt-0.5">
          <input
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            required={required}
            className="sr-only peer"
            aria-describedby="sms-consent-description"
          />
          {/* Custom checkbox box */}
          <div
            className={`
              w-5 h-5 rounded border-2 flex items-center justify-center
              transition-all duration-200
              ${checked
                ? "bg-orange-500 border-orange-500"
                : showError
                ? "bg-neutral-900 border-red-500"
                : "bg-neutral-900 border-neutral-600 group-hover:border-orange-500"
              }
            `}
          >
            {/* Checkmark */}
            {checked && (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2 6L5 9L10 3"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </div>

        {/* Label text */}
        <span
          id="sms-consent-description"
          className="text-sm text-gray-300 leading-relaxed"
        >
          By submitting this form, I agree to receive SMS text messages from{" "}
          <span className="text-white font-medium">
            Freedom Line Freight Express
          </span>{" "}
          including pickup scheduling, delivery updates, quote responses, and
          customer support. Message and data rates may apply. Message frequency
          varies.{" "}
          <span className="text-gray-400">
            Reply <strong className="text-white">STOP</strong> to opt out at
            any time or <strong className="text-white">HELP</strong> for
            assistance.
          </span>
          {required && (
            <span className="text-orange-500 ml-1" aria-hidden="true">
              *
            </span>
          )}
        </span>
      </label>

      {/* Privacy note */}
      <p className="text-xs text-gray-500 pl-8">
        Your number is never sold or shared. View our{" "}
        <Link
          to="/contact"
          className="text-orange-500 hover:text-orange-400 underline underline-offset-2"
        >
          privacy policy
        </Link>
        .
      </p>

      {/* Validation error */}
      {showError && (
        <p className="text-sm text-red-400 pl-8 flex items-center gap-1.5">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="7" cy="7" r="6.5" stroke="#f87171" />
            <path
              d="M7 4v3M7 9.5v.5"
              stroke="#f87171"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          Please agree to receive SMS updates to submit your request.
        </p>
      )}
    </div>
  );
}
