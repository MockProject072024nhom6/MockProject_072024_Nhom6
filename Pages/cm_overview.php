<?php
// CUSTOMER MANAGEMENT EDIT
// Database connection
$servername = "localhost";
$username = "root"; // Replace with your DB username
$password = ""; // Replace with your DB password
$dbname = "sgm_overview"; // Replace with your DB name

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $date_of_birth = $_POST['date_of_birth'];
    $gender = $_POST['gender'];
    $phone_number = $_POST['phone_number'];
    $address = $_POST['address'];
    $status = $_POST['status'];
    $customer_type  = $_POST['customer_type'];
    $customer_id = $_POST['customer_id'];

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO customers (name, date_of_birth, gender, phone_number, address, status, customer_type, customer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssss", $name, $date_of_birth, $gender, $phone_number, $address, $status, $customer_type, $customer_id);

    // Execute the statement
    if ($stmt->execute()) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement
    $stmt->close();
}

// Fetch guards data
$sql = "SELECT * FROM customers";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>XpressGuards - Customer</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .sidebar {
            height: 100vh;
            position: fixed;
            background-color: #f8f9fa;
            width: 240px;
            padding: 10px;
        }
        .sidebar a {
            text-decoration: none;
            display: block;
            padding: 10px;
            color: #333;
        }
        .content {
            margin-left: 250px;
            padding: 20px;
        }
        .table-container {
            position: relative;
        }
        .dropdown-board {
            position: absolute;
            right: 50px;
            top: 0;
            background: white;
            border: 1px solid #ccc;
            padding: 10px;
            display: none;
        }
        .dropdown:hover .dropdown-board {
            display: block;
        }
        .actions-dropdown {
            display: flex;
            justify-content: space-between;
            margin-left:990px;
        }
        .table-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }

        .btn-add-new {
            margin-left: auto;
        }

        .actions-dropdown {
            display: flex;
            align-items: center;
        }

        .actions-dropdown button {
            margin-right: 10px; /* Adds space between buttons */
        }

        /* Modal (Add New Board) Styles */
        .modal {
            display: none; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
        }

        .modal-content {
            background-color: #fefefe;
            margin: 15% auto; /* 15% from the top and centered */
            padding: 20px;
            border: 1px solid #888;
            width: 80%; /* Could be more or less, depending on screen size */
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }

        .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }

        .close:hover,
        .close:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }
    </style>
</head>
<body>

<div class="sidebar">
    <h2>XpressGuards</h2>
    <a href="#">Dashboard</a>
    <a href="#">Price</a>
    <a href="#">Contract</a>
    <a href="cm_overview.php">Customer</a>
    <a href="index.php">Security Guard</a>
    <a href="#">Feedback</a>
    <a href="#">Request</a>
    <a href="#">Equipment</a>
    <a href="#">Training Plan</a>
</div>

<div class="content">
    <h3>Customer</h3>
    <div class="table-container">
        <div class="table-header">
            <div class="actions-dropdown">
                <button id="addNewBtn" class="btn btn-primary btn-add-new">Add New</button>
                <div class="dropdown">
                    <button class="btn btn-outline-secondary">Filter</button>
                    <div class="dropdown-board">
                        <form method="get" action="">
                            <div class="form-group">
                                <label for="nameFilter">NAME</label>
                                <select class="form-control" id="nameFilter" name="name">
                                    <option value="">All</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="statusFilter">STATUS</label>
                                <select class="form-control" id="statusFilter" name="status">
                                    <option value="">All</option>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="addressFilter">ADDRESS</label>
                                <select class="form-control" id="addressFilter" name="address">
                                    <option value="">All</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="customertypeFilter">CUSTOMER TYPE</label>
                                <select class="form-control" id="customertypeFilter" name="customer_type">
                                    <option value="">All</option>
                                    <option value="">New</option>
                                    <option value="">Old</option>
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary">Apply</button>
                        </form>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="btn btn-outline-secondary">Export</button>
                    <div class="dropdown-board">
                        <button class="btn btn-outline-secondary">Options</button>
                        <ul>
                            <li><a href="#">Copy</a></li>
                            <li><a href="#">Print</a></li>
                        </ul>
                        <button class="btn btn-outline-secondary">Download Options</button>
                        <ul>
                            <li><a href="#">Excel</a></li>
                            <li><a href="#">CSV</a></li>
                            <li><a href="#">PDF</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <table class="table table-bordered table-hover mt-4">
            <thead class="thead-light">
                <tr>
                    <th>Select</th>
                    <th>Name</th>
                    <th>Date of Birth</th>
                    <th>Gender</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>Status</th>
                    <th>Customer Type</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php if ($result->num_rows > 0): ?>
                    <?php while($row = $result->fetch_assoc()): ?>
                        <tr>
                            <td><input type="checkbox"></td>
                            <td><?php echo $row['name']; ?></td>
                            <td><?php echo date("d/m/Y", strtotime($row['date_of_birth'])); ?></td>
                            <td><?php echo $row['gender']; ?></td>
                            <td><?php echo $row['phone_number']; ?></td>
                            <td><?php echo $row['address']; ?></td>
                            <td><?php echo $row['status'] == 'Active' ? '<span class="badge badge-success">Active</span>' : '<span class="badge badge-secondary">Inactive</span>'; ?></td>
                            <td><?php echo $row['customer_type']; ?></td>
                            <td><a href="cm_edit.php?id=<?php echo $row['customer_id']; ?>" class="btn btn-sm btn-outline-primary">Edit</a></td>
                        </tr>
                    <?php endwhile; ?>
                <?php else: ?>
                    <tr>
                        <td colspan="9">No customers found.</td>
                    </tr>
                <?php endif; ?>
            </tbody>
                <table class="table table-bordered">
                
            </table>
        </table>
    </div>
</div>

<!-- The Modal (Add New Board) -->
<div id="addNewModal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Add New Customer</h2>
        <form action="cm_overview.php" method="post">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="customer_id">Customer ID:</label>
                <input type="text" id="customer_id" name="customer_id" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="date_of_birth">Date of Birth:</label>
                <input type="date" id="date_of_birth" name="date_of_birth" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="gender">Gender:</label>
                <select id="gender" name="gender" class="form-control" required>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div class="form-group">
                <label for="phone_number">Phone Number:</label>
                <input type="tel" id="phone_number" name="phone_number" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="address">Address:</label>
                <input type="text" id="address" name="address" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="status">Status:</label>
                <select id="status" name="status" class="form-control" required>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
            </div>
            <div class="form-group">
                <label for="customer_type">Customer Type:</label>
                <select id="customer_type" name="customer_type" class="form-control" required>
                    <option value="New">New</option>
                    <option value="Old">Old</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Save</button>
            <button type="button" class="btn btn-secondary close"><a href="cm_overview.php">Cancel</a></button>
        </form>
    </div>
</div>

<script>
// Get the modal
var modal = document.getElementById("addNewModal");

// Get the button that opens the modal
var btn = document.getElementById("addNewBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>

<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>

<?php
$conn->close();
?>
