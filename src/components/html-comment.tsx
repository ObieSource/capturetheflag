"use client";
import { useRef, useEffect } from 'react';

export function HtmlComment({ text }: { text:  string }) {
  const elRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (elRef.current) {
      const comment = document.createComment(text);
      elRef.current.innerHTML = ''
      elRef.current.appendChild(comment)
    }
  });


  return <span ref={elRef}></span>
}
