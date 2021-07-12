type Props = {
  children?: React.ReactElement;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
}
