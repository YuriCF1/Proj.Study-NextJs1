import NextLink from "next/link";

export default function Link({ children, href, ...props }) {
  return (
    <>
      <NextLink href={href} {...props}> {/* Props seria qualquer outra propriedade, como css */}
        {children}
      </NextLink>
    </>
  );
}
