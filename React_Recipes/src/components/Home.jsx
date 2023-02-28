
import Form from './Form';
import Header from './Header';
import Navbar from './Navbar';
import OptionSection from './OptionSection';
import RandomSection from './RandomSection'
const Home = () => {
    return<>
    <Header></Header>
    <main className='main'>
    <Form></Form>
    <RandomSection></RandomSection>
    <h2>What are you looking for?</h2>
    <OptionSection></OptionSection>
    </main>
    </>
}
 
export default Home;