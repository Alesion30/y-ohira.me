import { useEffect, useState } from 'react';

export type TypingTextProps = {
  text: string;
  className?: string;
  speed?: number;
  onFinishRender?: () => void;
};

export const TypingTextPresenter: React.FC<TypingTextProps> = ({ className, onFinishRender, speed = 100, text }) => {
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    const charItr = text[Symbol.iterator]();
    let timerId: NodeJS.Timeout;

    (function showChar() {
      const nextChar = charItr.next();
      if (nextChar.done) {
        if (onFinishRender) {
          onFinishRender();
        }
        return;
      }
      setValue((current) => current + nextChar.value);
      timerId = setTimeout(showChar, speed);
    })();

    return () => clearTimeout(timerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <p className={className}>{value}</p>;
};
