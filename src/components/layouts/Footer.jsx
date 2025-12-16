const Footer = () => (
  <footer className="bg-foreground text-white py-12 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Datadynamix Technologies LLC</h3>
        <p className="text-white/80 mb-2">B2B Cloud Software and Systems</p>
        <p className="text-white/60 text-sm">
          Serving clients in the United States and Southeast Asia
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60 border-t border-white/10 pt-8">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <span>|</span>
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        <span>|</span>
        <a href="#" className="hover:text-white transition-colors">Contact Information</a>
      </div>
      
      <div className="text-center text-white/40 text-sm mt-8">
        © {new Date().getFullYear()} Datadynamix Technologies LLC. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;