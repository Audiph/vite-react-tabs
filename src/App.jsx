import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import Error from './components/Error';
import CompanyNames from './components/CompanyNames';
import CompanyDetails from './components/CompanyDetails';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [companyNames, setCompanyNames] = useState([]);
  const [activeId, setActiveId] = useState(0);
  const [companies, setCompanies] = useState([]);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      const companies = await response.json();
      setCompanyNames([...new Set(companies.map((item) => item.company))]);
      setCompanies(companies);
      console.log(companies);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  const activeTab = (id) => {
    setActiveId(id);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <Loading />
      </section>
    );
  }

  if (isError) {
    return (
      <section className="jobs-center">
        <Error />
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <CompanyNames
        companyNames={companyNames}
        activeTab={activeTab}
        activeId={activeId}
      />
      <CompanyDetails key={companies[activeId].id} {...companies[activeId]} />
    </section>
  );
};
export default App;
