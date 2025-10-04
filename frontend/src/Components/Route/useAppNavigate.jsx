// hooks/useAppNavigate.js
import { useNavigate } from "react-router-dom";

export default function useAppNavigate() {
  const navigate = useNavigate();
  return navigate;
}
