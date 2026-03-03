import { Hero } from '../components/Hero';
import { Services } from './Services';
import { Work } from './Work';
import { About } from './About';
import { Contact } from './Contact';

export const Home = () => {
    return (
        <main style={{ position: 'relative' }}>
            <div id="home"><Hero /></div>
            <div id="services"><Services /></div>
            <div id="work"><Work /></div>
            <div id="about"><About /></div>
            <div id="contact"><Contact /></div>
        </main>
    );
};
