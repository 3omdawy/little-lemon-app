import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';

function LoginScreen() {
    return (
        <>
            <Header></Header>
            <main>
                <LoginForm />
            </main>
            <Footer></Footer>
        </>
    );
}

export default LoginScreen;