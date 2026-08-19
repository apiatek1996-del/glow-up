export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex-grow flex flex-col">{children}</div>
    </div>
  );
}
