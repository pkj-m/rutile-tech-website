const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-between items-center px-8 py-16">
      {/* Main content area - centered vertically */}
      <div className="flex-1 flex items-center justify-center">
        <h1 className="font-serif text-6xl md:text-8xl text-muted-foreground text-center leading-tight tracking-wide">
          Rutile Technologies, Inc.
        </h1>
      </div>
      
      {/* Footer - contact link */}
      <footer className="pb-8">
        <a 
          href="mailto:contact@rutiletech.com" 
          className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300 underline decoration-1 underline-offset-4"
        >
          contact
        </a>
      </footer>
    </div>
  );
};

export default Index;