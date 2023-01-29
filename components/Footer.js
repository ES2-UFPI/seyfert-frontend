import Link from "next/link";
import app from "./../src/app/style.css";
export default function Footer() {
  return (
    <>
      <br />
      <br />
      <br />
      <div className="footer">
        <table>
          <tr>
            <td>
              <Link href={""}>Home</Link>
            </td>
            <td>
              <Link href={""}>Sobre</Link>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}
