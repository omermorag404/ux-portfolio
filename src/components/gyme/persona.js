import amir from "../img/amir.jpg";
import vered from "../img/vered.jpg";
import illan from "../img/illan.jpg";
import kobi from "../img/kobi.jpg";

export const Persona = ({ gymeData }) => {
  const photoMap = {
    vered: vered,
    amir: amir,
    illan: illan,
    kobi: kobi,
  };

  return (
    <div>
      <div
        style={{
          overflow: "hidden",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          alignItems: "center",
        }}
      >
        <img
          src={photoMap[gymeData.photo]}
          alt={gymeData.photo}
          width={"120%"}
        />
      </div>
      <p>{gymeData.name}</p>
      <p>{gymeData.age}</p>
      <p>{gymeData.location}</p>
      <p>{gymeData.proffesion}</p>
      <p>{gymeData.bio}</p>
    </div>
  );
};
