import org.junit.Test;
import static org.junit.Assert.*;

public class NumberCheckerTest {

    @Test
    public void testIsEven() {
        NumberChecker checker = new NumberChecker();
        assertTrue(checker.isEven(4));
        assertFalse(checker.isEven(5));
    }
}
