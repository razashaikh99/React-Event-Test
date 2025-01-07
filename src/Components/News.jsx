import React from 'react'
import NewCard from './NewCard'


export default function News() {
  return (
    <div>
      <NewCard
        head="Kurram still awaits relief goods as aid convoy's departure remains stalled"
        paragraph="Barrister Saif says convoy will be allowed to proceed in a day or two after security clearance"
        source="Geo News"
      />

      <NewCard
        head="US envoy says Israeli withdrawals from west Lebanon to continue until military fully out"
        paragraph="US envoy Amos Hochstein said on Monday that he was happy to see the Israeli army withdraw from the western sector of Lebanon back to Israel."
        source="Geo News"
      />

      <NewCard
        head="Canada PM Trudeau announces resignation as polls predict Liberal rout"
        paragraph="I intend to resign as party leader as prime minister after the party selects its next leader says outgoing premier"
        source="Geo News"
      />

    </div>
  );
}
