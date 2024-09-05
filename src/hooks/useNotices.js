import { useState, useEffect } from "react";

const useNotices = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://script.googleusercontent.com/macros/echo?user_content_key=ZyL39cgJ_l_abXNpwdv1fML4Zk86Yzyk1-14RmXtp-OYoNHKQquVepvRDM-W6p-3S8LB3A8JL5LkbySWgqZf15nAOQMzToJim5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBCAEVxjZ5DNZK3vH4vKFlFeXrbUvizPGxXkml3trEQvHpggOmMD-R68ILu4LhZX9RVTrvedBu8TSSk3U7vcOdVLSxKYiqU8Ow&lib=MVKZuGYfVz60BLc5DBfDZCthPWNM8Au2Y"
    )
      .then((response) => response.json())
      .then((data) => {
        const sortedNotices = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setNotices(sortedNotices);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return { notices, loading };
};

export default useNotices;
