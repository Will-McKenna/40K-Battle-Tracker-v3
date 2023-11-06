const Footer = () => {
  return (
    <footer className="bg-davyGray text-cosmicLatte h-10 flex items-center justify-between px-2">
      <p>&copy; Copyright {new Date().getFullYear()} by 40K Battle Tracker</p>
      <span>Built by Will McKenna</span>
    </footer>
  );
};

export default Footer;
