import React from "react";

export default function Home(props) {
  let mystyle = {
    color: props.mode === "dark" ? "white" : "#283a4d",
    backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
  };
  return (
    <div>
      <div className="container">
        <div className="card my-4" style={mystyle}>
          <h5 className="card-header text-center ">Whispers in the Fog</h5>
          <div className="card-body">
            <h5 className="card-title">Fog :--</h5>
            <p className="card-text">
              The fog rolls in on silent feet,A ghostly shroud, a cold deceit.It
              curls through cracks and clings to stone,A breathless hush where
              winds have blown.From shadowed trees, the whispers creep,Of
              secrets sown and souls that weep.They speak in sighs, in broken
              moans,Of names long lost and buried bones.A lantern sways, the
              light is thin,It flickers like the doubt within.You strain to
              hear, you dare to stay—But fog and night will steal your way.So
              walk, but know you’re not alone,The whispers seek to claim their
              own.
            </p>
          </div>
        </div>

        <div className="card my-4" style={mystyle}>
          <h5 className="card-header text-center">The Hollow Wind</h5>
          <div className="card-body">
            <h5 className="card-title">Wind :--</h5>
            <p className="card-text">
              The night speaks in voices I cannot name. It moans through the
              cracks in the old window frame, dragging with it the scent of wet
              leaves and something older — rot, maybe, or memory. Shadows twitch
              against the wall, not mine, not yours, but something else that
              lingers between the floorboards.I dreamed of the forest again,
              thick with fog and trembling light. The trees had no leaves, only
              hands, reaching skyward like sinners begging for rain. Every step
              I took, the ground whispered secrets I never asked to know. Names.
              Dates. Warnings.Somewhere, a bell rings with no hand to pull its
              rope. The sound is distant, and yet it lives inside my bones. I
              know it’s calling me — not out of fear, but inevitability. We all
              walk toward something we cannot see. Some just hear the bell
              sooner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
