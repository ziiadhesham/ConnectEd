import ComposerInput from "../../components/ComposerInput"
import Header from "../../components/HeaderPosting"
import SocialPost from "../../components/SocialPost"
import TextAndPhoto from "../../components/textAndPhoto"
import TextAndVedio from "../../components/TextAndVedio"

const feed = () => {
    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", backgroundColor:"rgba(40, 40, 40, 0.7) "
            ,marginTop:"0px",padding:"0px", 
        }}>
            <Header/>
            <ComposerInput />
            <div className="posts-container" style={{maxWidth:"720px"}}>
      <TextAndVedio/>
      <TextAndPhoto/>
            </div>
        </div>
    )
}
export default feed