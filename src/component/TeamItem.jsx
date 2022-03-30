import "../css/TeamItem.scss";

function TeamItem({imageSrc, name, role, desc}) {
  return (
    <div className="textbox-02">
      <div className="banner"></div>

      <div className="avatar-wrapper">
        <img className="avatar" src={imageSrc} alt={name} />
      </div>

      <div className="text-box__info">
        <p className="text-box__title">{name}</p>

        <p className="text-box__role">{role}</p>

        <p className="text-box__desc">{desc}</p>
      </div>
    </div>
  );
}

export default TeamItem;
