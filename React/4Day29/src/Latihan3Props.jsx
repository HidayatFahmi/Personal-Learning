import PropTypes from "prop-types";

export default function Children(props) {

  return (
    <div>
        value dari latihan 2 : {props.nilai}
      {/* <div>Objek dari latihan 1: {props.valueLatihan.nama}</div> */}

      {/* mempassing function dari parent */}
      <div>
      <button onClick={props.Kali2}>Kali2 children</button>
      {props.nilai}
      </div>

    </div>
  );
}

Children.propTypes = {
  valueLatihan1: PropTypes.shape({
    nama: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
  }).isRequired,
};
