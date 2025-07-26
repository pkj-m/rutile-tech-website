const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-paper relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-texture-grain opacity-30"></div>
      
      {/* Main content container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between px-12 md:px-20 py-16">
        {/* Main content area - left-aligned and vertically centered */}
        <div className="flex-1 flex items-center">
          <div className="max-w-5xl">
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-foreground leading-tight tracking-wide animate-fade-in">
              <span className="block drop-shadow-text">Rutile</span>
              <span className="block text-muted-foreground drop-shadow-text">Technologies,</span>
              <span className="block text-muted-foreground/80 drop-shadow-text">Inc.</span>
            </h1>
          </div>
        </div>
        
        {/* Elegant separator line */}
        <div className="hidden md:block absolute left-12 top-1/2 w-px h-32 bg-gradient-to-b from-transparent via-border to-transparent transform -translate-y-16"></div>
        
        {/* Footer - contact link */}
        <footer className="pb-8 pl-4">
          <a 
            href="mailto:contact@rutiletech.com" 
            className="group relative text-muted-foreground text-sm tracking-wider font-light hover:text-foreground transition-all duration-500 ease-out"
          >
            <span className="relative z-10">contact</span>
            <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground transition-all duration-500 ease-out group-hover:w-full"></span>
          </a>
        </footer>
      </div>
      
      {/* Subtle corner accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent/10 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-muted/20 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Index;