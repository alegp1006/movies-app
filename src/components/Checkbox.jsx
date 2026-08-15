import "../styles/checkbox.css";

export function Checkbox({ onChange }) {
  return (
    <div class="checkbox-wrapper-7">
      <input
        onClick={onChange}
        class="tgl tgl-ios"
        id="cb2-7"
        type="checkbox"
      />
      <label class="tgl-btn" for="cb2-7" />
    </div>
  );
}
