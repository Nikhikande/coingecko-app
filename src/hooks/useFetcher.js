import React, { useState, useEffect } from "react";
export function useFetcher(action) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  async function loadData() {
    try {
      setLoading(true);
      const actionData = await action();
      setData(actionData);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }
  const memoizedCall = React.useCallback(() => loadData(),[action])
  useEffect(() => {
    memoizedCall();
  }, [memoizedCall]);
  return [data, loading, error];
}
