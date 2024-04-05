import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { MdAddCircle } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

import axios from "axios";

export default function AddCardModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cardFormData, setCardFormData] = useState({
    card_type: "",
    card_name: "",
    expiryDate: "",
    name: "",
    bank_name: "",
    card_number:""
  });

  const handleCardFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCardFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Send a POST request to your backend API endpoint
      const response = await axios.post("/api/finance/card", cardFormData);
      console.log("Response from server:", response.data);
      // Optionally, close the modal after successful submission
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error accordingly, display a message to the user, etc.
    }
  };

  return (
    <>
      <div className="flex gap-2 align-center text-center justify-around">
        <h1 className="text-lg font-medium">My Cards</h1>
        <span className="text-xl">
          <div className="flex flex-wrap gap-3"></div>
          <Button className="w-fit" onClick={onOpen}>
            <MdAddCircle />
          </Button>
        </span>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            <ModalHeader className="flex flex-col gap-1">
              Fill the form
            </ModalHeader>
            <ModalBody>
              <form onSubmit={handleCardFormSubmit}>
                <Label>
                  Name:
                  <Input
                    type="text"
                    name="card_name"
                    value={cardFormData.card_name}
                    onChange={handleCardFormChange}
                    required
                  />
                </Label>
                <Label>
                  Bank Name:
                  <Input
                    type="text"
                    name="bank_name"
                    value={cardFormData.bank_name}
                    onChange={handleCardFormChange}
                    required
                  />
                </Label>
                <Label>
                  Card Number:
                  <Input
                    type="Number"
                    name="card_number"
                    value={cardFormData.card_number}
                    onChange={handleCardFormChange}
                    required
                  />
                </Label>
                <Label>
                  Card Type:
                  <Input
                    type="text"
                    name="card_type"
                    value={cardFormData.card_type}
                    onChange={handleCardFormChange}
                    required
                  />
                </Label>
                <Label>
                  Expiry Date:
                  <Input
                    type="string"
                    name="expiryDate"
                    value={cardFormData.expiryDate}
                    onChange={handleCardFormChange}
                    required
                  />
                </Label>
                <br />
                <Button type="submit">Submit</Button>
              </form>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}
