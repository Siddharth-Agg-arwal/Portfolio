import './NavBar.css';

export default function NavBar() {

    let links = document.querySelectorAll('a');
    let background = document.querySelector('.link-background')


    const clickHandler = (el) => {
        links.forEach(link => {
            link.classList.remove('active');
        })
        el.classList.add('active');
    }
    links.forEach((link,index) => {
        link.addEventListener('click',(e) => {
            e.preventDefault();
            // Update background position
            background.style.transform = `translateX(${130* index}%)`
            clickHandler(e.currentTarget);
            
        });
    })
    return (
        <nav>
            <div class="link-background"></div>
            <ul>
                <li>
                <a class="active">
                    <span class="link-text">Home</span>
                </a>
                </li>
                <li>
                <a class="active">
                    <span class="link-text">About</span>                        
                </a>
                </li>
                <li>
                <a>
                    <span class="link-text">Projects</span>
                </a>
                </li>
                <li>
                <a>
                    <span class="link-text">Blogs</span>
                </a>
                </li>
            </ul>
        </nav>
    );
  }