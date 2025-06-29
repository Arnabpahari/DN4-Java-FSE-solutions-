import static org.mockito.Mockito.*;
import org.junit.Test;
import static org.junit.Assert.*;

public class MyServiceTest {

    @Test
    public void testExternalApi() {
        //Mock
        ExternalApi mockApi = mock(ExternalApi.class);

        //Stub the method
        when(mockApi.getData()).thenReturn("Mock Data");

        //Inject into service
        MyService service = new MyService(mockApi);

        // Act and Assert
        String result = service.fetchData();
        assertEquals("Mock Data", result);
    }
}

