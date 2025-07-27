const Index = () => {
  return (
    <div className="h-screen w-screen bg-gradient-paper relative overflow-hidden touch-none">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-texture-grain opacity-30"></div>
      
      {/* Main content container */}
      <div className="relative z-10 h-full w-full flex flex-col justify-between px-4 sm:px-8 md:px-12 lg:px-20 py-4 sm:py-6 md:py-8 lg:py-16 pb-8 sm:pb-12 md:pb-8 lg:pb-16">
        {/* Main content area - left-aligned and vertically centered */}
        <div className="flex-1 flex items-center min-h-0">
          <div className="w-full max-w-[80%] sm:max-w-[75%] md:max-w-4xl lg:max-w-5xl">
            <h1 className="font-serif text-[14vw] sm:text-[12vw] md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-foreground leading-tight tracking-wide animate-fade-in">
              <span className="block drop-shadow-text">Rutile</span>
              <span className="block text-muted-foreground drop-shadow-text">Technologies,</span>
              <span className="block text-muted-foreground/80 drop-shadow-text">Inc.</span>
            </h1>
          </div>
        </div>
        
        {/* Elegant separator line */}
        <div className="hidden lg:block absolute left-12 top-1/2 w-px h-32 bg-gradient-to-b from-transparent via-border to-transparent transform -translate-y-16"></div>
        
        {/* Footer - contact link */}
        <footer className="pb-2 sm:pb-4 md:pb-6 lg:pb-8 pl-2 sm:pl-4 flex-shrink-0">
          <a 
            href="mailto:pankajmishra1511@gmail.com" 
            className="group relative text-muted-foreground text-xs sm:text-sm tracking-wider font-light hover:text-foreground transition-all duration-500 ease-out"
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