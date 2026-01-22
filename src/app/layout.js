export const metadata = {
  title: "All Luminum | Soluções em Alumínio",
  description: "Soluções industriais em alumínio com qualidade, precisão e confiabilidade.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0 }}>
        <header style={{ padding: "20px", borderBottom: "1px solid #e5e5e5" }}>
          <strong>All Luminum</strong>
        </header>

        {children}

        <footer style={{ padding: "20px", borderTop: "1px solid #e5e5e5" }}>
          <small>© {new Date().getFullYear()} All Luminum. Todos os direitos reservados.</small>
        </footer>
      </body>
    </html>
  );
}
