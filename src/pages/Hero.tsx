import {animated, useSpring} from 'react-spring';

type Props = {}
const Hero = (props: Props) => {
  const styles = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    delay: 400
  })

  return (
    <div className="font-press-start">
        <section className="hero bg-blue-500 py-8 text-white">
        <div className="">
            <animated.div style={styles} className="text-center">
                <h1 className="title"><span className="text-3xl">who's that pokémon?</span></h1>
            </animated.div>
        </div>
    </section>
    </div>
  )
}
export default Hero