import { useLocation } from 'react-router-dom';
import qs from 'query-string';
export default function useQuery() {
    var location = useLocation();
    return qs.parse(location.search);
}
