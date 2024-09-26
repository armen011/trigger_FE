import { CSSProperties, FC } from "react";
import ReactMarkdown from "react-markdown";

type MarkdownProps = {
  content: string;
  className?: string;
};

const Markdown: FC<MarkdownProps> = ({ content, className }) => {
  return (
    <div className={className}>
      <ReactMarkdown
        className={
          "[&>p>a]:text-white [&>p>a]:underline underline-offset-4 [&>p>strong]:text-white text-text-secondary whitespace-pre-wrap"
        }
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default Markdown;
