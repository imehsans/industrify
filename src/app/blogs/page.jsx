import Container from '@/components/container/Container'
import Hero from '@/components/hero/Hero'
import TopSection from '@/components/sectiion/TopSection' 

const BlogPage = () => {
   return (
      <div>
         <Hero prrimary={"Our"} secindary={"Blogs"} />
         <Container>
            <TopSection brandTitle={'Industrify'} primary={'Our'} secondary={'Blogs'}
               text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'} />
         </Container>

      </div>
   )
}

export default BlogPage