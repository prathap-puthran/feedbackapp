function FeedbackStats({Feedbackdata}) {
    let avgr = 0
    Feedbackdata.map((a)=>avgr+=a.rating)
  return (
    <div className="feedback-stats mx-10">
        <h4>{Feedbackdata.length} reviews</h4>
        <h4>average rating = {isNaN((avgr/Feedbackdata.length).toFixed(1)) ? 0:(avgr/Feedbackdata.length).toFixed(1)}</h4>
    </div>
  )
}
export default FeedbackStats