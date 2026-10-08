// Renders dictionary strings: **text** becomes bold, and "+¥500" is kept on one line.
export function rich(text: string, strongClass = "font-semibold text-pk-ink") {
  return text.split(/(\*\*[^*]+\*\*|\+¥500)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className={strongClass}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part === "+¥500") {
      return (
        <span key={i} className="whitespace-nowrap">
          {part}
        </span>
      );
    }
    return part;
  });
}
