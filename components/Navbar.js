import Link from "next/link";
import app from "./../src/app/style.css";
export default function Navbar() {
  return (
    <>
      <div className="navbar">
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
      <br />
      <br />
      <br />
    </>
  );
}
