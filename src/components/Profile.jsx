import myPhoto from "../images/IMG_3264.jpeg";

export default function Profile() {
  return (
    <section className="profile">
      <div className="profile-pic">
        <img src={myPhoto} alt="Edis Bandak" />
      </div>
      <h1 className="profile-name">Edis Bandak</h1>
    </section>
  );
}
