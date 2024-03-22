// IMPORTS ATOMS
import PictureInternalContain from "@/atoms/picture/internal/jsx/contain/index.jsx"

// IMPORTS MARKED
import { marked } from "marked"

// IMPORTS REACT
import { useState } from "react"

const ReadMoreButton = ( props ) => {

    const [ showContent, setShowContent ] = useState(false)
    // GET PROPS
    const { text } = props
    const html = marked.parse(text)

    return(
        <div>
            {

                showContent &&
                <section dangerouslySetInnerHTML={{ __html: html }}className="markdown textlg" />

            }
            <button className="flex items-center font-bold font-proxima_nova text-sm text-thrive_dark_green" onClick={() => setShowContent(!showContent)}>
                {

                    showContent ? "Show Less" : "Read More"

                }
                {

                    showContent &&
                    <div className="size-4">
                        <PictureInternalContain
                            alternative_text="minus icon"
                            source="/icons/minus.svg"
                        />
                    </div>

                }
                {

                    !showContent &&
                    <div className="size-4">
                        <PictureInternalContain
                            alternative_text="plus icon"
                            source="/icons/plus.svg"
                        />
                    </div>

                }
            </button>
        </div>
    )

}

export default ReadMoreButton
