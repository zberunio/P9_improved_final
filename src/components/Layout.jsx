const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-dark">
      <div className="flex-grow-1 d-flex flex-column">

        <main className="container my-1 flex-grow-1 content-area">
          {children}
        </main>
      </div>

      <footer className="footer bg-black text-light text-center py-3 mt-auto">
        <p>&copy; 2024 zactzyofficial. akolangto HAHAHAHAHAHA.</p>
      </footer>
    </div>
  );
};

export default Layout;
