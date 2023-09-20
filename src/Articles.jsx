import './Articles.css';
import AccordionSection from './AccordionSection';

const accordionSections = [
    {
        title: "Why Don’t Cats Like When You Touch Their Paws?",
        // src: "http://placekitten.com/200/200?image=2",
        // alt: "kitten",
        content: (
            <div>
                <p>Cats are highly sensitive creatures, and their paws are one of the most sensitive parts of their bodies. The pads on a cat's paw are packed with nerve endings, making them extremely sensitive to touch. When you touch your cat's paws, it may feel uncomfortable or even painful for them, depending on the amount of pressure applied.</p>
                <p>In addition, cats are naturally cautious animals, and they rely on their paws for balance and mobility. Touching their paws may make them feel vulnerable or threatened, as it interferes with their ability to move quickly and escape from potential danger.</p>
                <p>However, some cats can be trained to tolerate or even enjoy having their paws touched, especially if they are exposed to it from a young age and associate it with positive experiences, such as treats or affection. It's important to respect your cat's boundaries and not force them to tolerate something that makes them uncomfortable or stressed.</p>
            </div>
        ),
    },
    {
        title: "When Did Cats Become Domesticated?",
        // src: "http://placekitten.com/200/200?image=2",
        // alt: "kitten",
        content: (
            <div>
                <p>The domestication of cats is believed to have started around 10,000-12,000 years ago in the Fertile Crescent region of the Near East, which includes parts of modern-day Egypt, Iraq, and Turkey. It's thought that the earliest domesticated cats were attracted to human settlements because they provided a reliable source of food in the form of rodents that infested grain stores.</p>
                <p>Over time, cats became more closely associated with humans, and people began to selectively breed them for certain traits, such as friendliness and tameness. Cats were also revered in ancient Egyptian society, where they were seen as sacred animals and often depicted in art and mythology.</p>
                <p>Today, cats are one of the most popular pets in the world, with millions of households keeping them as beloved companions. Despite their long history of domestication, however, many cats retain their independent nature and may not always behave in ways that humans expect or desire.</p>
            </div>
        ),
    },
    {
        title: "How To Make A Cat Feel Safe?",
        // src: "http://placekitten.com/200/200?image=2",
        // alt: "kitten",
        content: (
            <div>
                <p>Creating a safe and comfortable environment for your cat is essential for their well-being. Here are some tips on how to make your cat feel safe:</p>
                <ul>
                    <li> Provide a cozy hiding spot: Cats like to have a place where they can retreat and feel safe. You can create a cozy hiding spot by providing a covered bed or a cardboard box with a cozy blanket inside.</li>
                    <li> Keep a consistent routine: Cats thrive on routine, and any sudden changes can be stressful for them. Stick to a consistent feeding and playtime schedule to help your cat feel secure.</li>
                    <li> Give your cat space: Cats are independent animals and don't always want to be around people. Allow your cat to have some alone time and don't force them to interact with you if they don't want to.</li>
                    <li> Offer vertical space: Cats feel more secure when they have high vantage points. Provide shelves, cat trees, or perches where your cat can climb up and observe their surroundings.</li>
                    <li> Use pheromone products: Pheromone products, such as Feliway, mimic the natural pheromones that cats produce when they feel safe and happy. These products can help to reduce stress and anxiety in cats.</li>
                    <li> Provide plenty of toys and stimulation: Cats need mental and physical stimulation to feel happy and safe. Provide plenty of toys and interactive playtime to keep your cat engaged and entertained.</li>
                </ul>
                <p>Remember, every cat is unique and may have their own preferences for what makes them feel safe and comfortable. Be patient and observe your cat's behavior to determine what works best for them.</p>
            </div>
        ),
    },
    {
        title: "Can Cats Survive A Fall From Any Height?",
        // src: "http://placekitten.com/200/200?image=2",
        // alt: "kitten",
        content: (
            <div>
                <p>Cats are known for their ability to survive falls from great heights, but this doesn't mean that they can survive a fall from any height without injury. A cat's ability to survive a fall depends on several factors, including the height of the fall, the surface they land on, and the angle of impact.</p>
                <p>Studies have shown that cats have a natural ability to twist their bodies in mid-air, which helps to reduce the impact of the fall. Additionally, cats have a relatively low body mass and a large surface area, which allows them to slow their descent and decrease the force of impact upon landing.</p>
                <p>However, falls from very high places, such as tall buildings or trees, can still be extremely dangerous for cats, and they may sustain serious injuries or even die upon impact. The surface the cat lands on is also a significant factor, as landing on a hard surface, such as concrete, is much more likely to cause serious injury than landing on a softer surface, such as grass or soil.</p>
                <p>In general, it's best to keep cats indoors to prevent them from falling from heights and risking injury. If you do have an outdoor cat, make sure to supervise them and provide a safe and secure environment for them to explore.</p>
            </div>
        ),
    },
    {
        title: "Can Cats Have Twins?",
        content: (
            <div>
                <p>Cats can have litters of multiple kittens, but they typically do not have twins in the same way that humans or some other mammals do. Unlike humans, cats release multiple eggs during each reproductive cycle, which can be fertilized by different sperm, resulting in a litter of multiple kittens.</p>
                <p>Each kitten in a litter will have its own placenta, and they will not share a single placenta like human twins do. Therefore, while cats can have litters of multiple kittens, they do not have identical twins like humans or some other mammals.</p>
                <p>It's worth noting that the size of a cat's litter can vary and is influenced by several factors, including the cat's age, health, and genetics. Most cats will have litters of around 3-5 kittens, but some may have litters of up to 10 or more kittens.</p>
            </div>
        ),
    },
    {
        title: "What Smells Do Cats Hate?",
        content: (
            <div>
                <p>Cats have a strong sense of smell and are known to be sensitive to certain odors. Here are some smells that cats are known to dislike:</p>
                <ul>
                    <li> Citrus smells: Cats tend to dislike the smell of citrus fruits such as lemons, oranges, and grapefruits.</li>
                    <li> Lavender: While humans tend to find the scent of lavender calming and soothing, cats are known to be repelled by the smell.</li>
                    <li> Peppermint: The strong smell of peppermint is often used as a natural deterrent for cats.</li>
                    <li> Eucalyptus: The scent of eucalyptus oil is also known to repel cats.</li>
                    <li> Strong cleaning products: Cats may also be put off by the strong scent of cleaning products such as bleach, ammonia, or vinegar.</li>
                </ul>
                <p>It is important to note that every cat is different and may have their own preferences when it comes to smells. Additionally, some cats may be more sensitive to smells than others. If you're unsure whether a particular smell bothers your cat, it's always best to monitor their behavior and consult with a veterinarian if you have any concerns.</p>
            </div>
        ),
    }
];


function About() {
    return (
        <div>
            {/* <a class="skip-to-content-link" href="#main">Skip to content</a> */}

            {/* <div className="cat__behavior">
                <h1 className="cat__behavior-tittle"> Cat Behavior</h1>
                <p className="cat__behavior-text">From resolving problems like urinating outside of the litter box to avoiding scratches during playtime, knowledge about feline behavior is a cat care essential.<br></br>Browse our cat behavior archives for expert-written, expert-reviewed guides that will help you troubleshoot and understand your cat’s habits, motivations, and moods.</p>
                <img className="cat__behavior-img" src='http://placekitten.com/200/200?image=2'></img>
            </div> */}

            <div className="articles" id="main">
                <h2 className="articles__tittle">CAT ARTICLES</h2>
                {accordionSections.map(({ title, content }, index) => (
                    <AccordionSection key={index} title={title}>
                        <div className="articles__text">{content}
                        </div>
                    </AccordionSection>
                ))}
            </div>
        </div>
    );
}

export default About;

