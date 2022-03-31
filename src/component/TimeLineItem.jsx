import "../css/TimeLineItem.scss";

function TimeLineItem({timeTitle, year, group}) {
  return (
    <div className="timeline-item">
      <div className="time">
        <p className="q">{timeTitle}</p>
        <p className="year">{year}</p>
      </div>

      <div className="icon-group">
        {(group ?? []).map((item, index) => (
          <div key={index} className="icon-item">
            <img className="icon" src={item.icon} alt="" />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimeLineItem;
