import React, {useState} from "react";
import "./Gigs.scss";
import { gigs } from "../../data";
import GigCard from "../../components/gigCard/GigCard";
import Gig from "../gig/Gig";

const Gigs = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false)
  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  }
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">Fiverr Graphics & Design</span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Fiverrs AI artists
        </p>

        <div className="menu">

          <div className="left">
            <span className="budget">Budget</span>
            <input type="number" placeholder="min" />
            <input type="number" placeholder="max" />
            <button>Apply</button>
          </div>

          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">{sort === "sales" ? "Best Selling" : "Newest"}</span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)}/>
           {open && (
           <div className="rightMenu">
           {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                  )}
            </div>
            )}
          </div>

        </div>

        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>


      </div>
    </div>
  );
}

export default Gigs;
