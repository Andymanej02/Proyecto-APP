import { render, screen } from '@testing-library/react';

describe('RegisterPage Component', () => {
  it('should render the registration form', () => {
    // Renderiza el componente deseado en su lugar
    // render(React.createElement(RegisterPage));

    // Verificar que el formulario se renderice correctamente
    const registerForm = screen.getByRole('form');
    expect(registerForm).toBeInTheDocument();

    // Verificar que existan campos de entrada
    const firstNameInput = screen.getByLabelText('Nombres:');
    const lastNameInput = screen.getByLabelText('Apellidos:');
    const emailInput = screen.getByLabelText('Correo:');
    const usernameInput = screen.getByLabelText('Usuario:');
    const passwordInput = screen.getByLabelText('Contraseña:');

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('should render the registration button', () => {
    // Renderiza el componente deseado en su lugar
    // render(React.createElement(RegisterPage));

    // Verificar que el botón de registro se renderice correctamente
    const registerButton = screen.getByRole('link', { name: /Registrarse/i });
    expect(registerButton).toBeInTheDocument();
  });

  it('should render the login link', () => {
    // Renderiza el componente deseado en su lugar
    // render(React.createElement(RegisterPage));

    // Verificar que el enlace de inicio de sesión se renderice correctamente
    const loginLink = screen.getByRole('link', { name: /Iniciar sesión/i });
    expect(loginLink).toBeInTheDocument();
  });
});
