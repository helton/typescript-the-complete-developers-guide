import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const reader = MatchReader.fromCsv('resources/football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

reader.load();
summary.buildAndPrintReports(reader.matches);
