//summarizes the audio 


//i dont need this i think
export default function Summarize({file}){

  return (
    <>
      {/* style the text so it gets shown in a textbox */}
      <p>
        {file ? file : 'Summary will be dislay here' }
      </p>
    </>
  )
}