import { forwardRef, TextareaHTMLAttributes } from "react";

const TextAreaInput = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>((props, ref) => (
  <div className="mt-2">
    <textarea
      ref={ref}
      className="block w-full rounded-md px-3 py-1.5 outline outline-1 -outline-offset-1 outline-neutral-30 placeholder:text-neutral focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
      {...props}
    />
  </div>
));

export default TextAreaInput;
