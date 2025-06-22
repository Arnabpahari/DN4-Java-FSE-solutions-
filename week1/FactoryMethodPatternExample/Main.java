public class Main {
    public static void main(String[] args) {
        DocumentFactory factory;

        // Creating Word Document
        factory = new WordFactory();
        Document wordDoc = factory.createDocument();
        wordDoc.open();

        // Creating PDF Document
        factory = new PdfFactory();
        Document pdfDoc = factory.createDocument();
        pdfDoc.open();

        // Creating Excel Document
        factory = new ExcelFactory();
        Document excelDoc = factory.createDocument();
        excelDoc.open();
    }
}
