import { forwardRef, TextareaHTMLAttributes } from "react";

const TextAreaInput = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>((props, ref) => (
  <div className="mt-2">
    <textarea
      ref={ref}
      className="block w-full rounded-md px-3 py-1.5 text-base text-body-regular outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
      {...props}
    />
  </div>
));

export default TextAreaInput;
